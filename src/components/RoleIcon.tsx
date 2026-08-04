type RoleIconProps = {
  id: string;
  className?: string;
};

export function RoleIcon({ id, className = "" }: RoleIconProps) {
  const common = {
    className: `role__svg ${className}`.trim(),
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
  };

  if (id === "software") {
    return (
      <svg {...common}>
        <rect
          x="8"
          y="12"
          width="48"
          height="36"
          rx="6"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M8 22h48"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle cx="16" cy="17" r="1.8" fill="currentColor" />
        <circle cx="22" cy="17" r="1.8" fill="currentColor" />
        <circle cx="28" cy="17" r="1.8" fill="currentColor" />
        <path
          d="M22 32l-6 6 6 6M34 32l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 44l4-16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "design") {
    return (
      <svg {...common}>
        <rect
          x="12"
          y="10"
          width="40"
          height="44"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M22 24h20M22 32h14M22 40h17"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M38 40l12 12M46 44l4 8-8-4 4-4z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "tutor") {
    return (
      <svg {...common}>
        <path
          d="M10 22l22-10 22 10v24c0 2-10 8-22 8S10 48 10 46V22z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M32 12v42"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M18 28h10M18 35h8"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M36 28h10M36 35h8"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    );
  }

  if (id === "electrician") {
    return (
      <svg {...common}>
        <path
          d="M34 8L18 34h12l-4 22 20-30H34l4-18z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M12 50h8M44 50h8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle cx="16" cy="50" r="2.2" fill="currentColor" opacity="0.55" />
        <circle cx="48" cy="50" r="2.2" fill="currentColor" opacity="0.55" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}
