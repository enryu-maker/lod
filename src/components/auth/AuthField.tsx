type AuthFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
};

export default function AuthField({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required = true,
}: AuthFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-sans font-medium text-sm text-[#0A1628] mb-2 block"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full px-4 py-3.5 rounded-lg bg-[#F4F6F8] border border-[#E8EAED] text-[#0A1628] font-sans font-normal text-sm placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#00C2A8] focus:border-transparent transition-shadow"
      />
    </div>
  );
}
