from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

src_dir = Path(
    r"C:\Users\admin\.cursor\projects\c-Users-admin-Desktop-tristoncarter\assets"
)
out_dir = Path(r"c:\Users\admin\Desktop\tristoncarter\public\photos\enhanced")
out_dir.mkdir(parents=True, exist_ok=True)

files = sorted(src_dir.glob("*.png"))
wa = [p for p in files if "WhatsApp" in p.name or "WhatsApp_Iamage" in p.name]
targets = wa if wa else files


def enhance_pil(path: Path, scale: float = 2.0) -> Image.Image:
    img = Image.open(path).convert("RGB")
    w, h = img.size
    img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)

    # Gentle denoise via slight blur then restore detail
    soft = img.filter(ImageFilter.MedianFilter(size=3))
    img = Image.blend(img, soft, 0.25)

    img = ImageEnhance.Contrast(img).enhance(1.12)
    img = ImageEnhance.Color(img).enhance(1.08)
    img = ImageEnhance.Sharpness(img).enhance(1.55)
    img = ImageOps.autocontrast(img, cutoff=1)

    # OpenCV CLAHE for local contrast if available
    arr = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)
    lab = cv2.cvtColor(arr, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=1.8, tileGridSize=(8, 8))
    l2 = clahe.apply(l)
    arr = cv2.cvtColor(cv2.merge([l2, a, b]), cv2.COLOR_LAB2BGR)

    blur = cv2.GaussianBlur(arr, (0, 0), 1.0)
    arr = cv2.addWeighted(arr, 1.35, blur, -0.35, 0)
    return Image.fromarray(cv2.cvtColor(arr, cv2.COLOR_BGR2RGB))


def square_center_crop(img: Image.Image, ratio: float = 0.62) -> Image.Image:
    """Upper-biased crop useful for standing portraits."""
    w, h = img.size
    side = int(min(w, h) * ratio)
    left = (w - side) // 2
    top = max(0, int(h * 0.08))
    if top + side > h:
        top = h - side
    return img.crop((left, top, left + side, top + side))


for i, path in enumerate(targets, 1):
    with Image.open(path) as probe:
        w, h = probe.size
    scale = 2.0 if max(h, w) < 1800 else 1.5
    enhanced = enhance_pil(path, scale=scale)
    name = f"photo-{i:02d}-enhanced.jpg"
    out_path = out_dir / name
    enhanced.save(out_path, "JPEG", quality=92, optimize=True)

    portrait = square_center_crop(enhanced)
    portrait_name = f"photo-{i:02d}-portrait.jpg"
    portrait.save(out_dir / portrait_name, "JPEG", quality=92, optimize=True)

    print(
        f"{name}: {w}x{h} -> {enhanced.size[0]}x{enhanced.size[1]} | {portrait_name}"
    )

print("DONE", len(targets))
print("OUT", out_dir)
