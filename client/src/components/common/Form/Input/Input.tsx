import { HelperText, Label, TextInput } from 'flowbite-react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputProps<TFieldValue extends FieldValues> = {
  name: Path<TFieldValue>;
  label: string;
  type?: string;
  register: UseFormRegister<TFieldValue>;
  error?: string;
  placeholder: string;
  id: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disabled?: boolean;
};

const Input = <TFieldValue extends FieldValues>({
  name,
  label,
  type = 'text',
  register,
  error,
  placeholder,
  id,
  formText,
  success,
  disabled,
  onBlur,
}: InputProps<TFieldValue>) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
    register(name).onBlur(e); // only call once
  };

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={id} className="!text-gray-900 text-[18px]">
          {label}
        </Label>
      </div>
      <TextInput
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        color={error ? 'failure' : success ? 'success' : 'gray'}
        onBlur={onBlurHandler}
        disabled={disabled}
      />

      {/* Error message */}
      {error && (
        <HelperText className="!text-red-600">
          <span>Oops! </span>
          {error}
        </HelperText>
      )}

      {/* Success message */}
      {!error && success && (
        <HelperText className="!text-green-600">{success}</HelperText>
      )}

      {/* Form text (like hint/help) */}
      {!error && !success && formText && (
        <HelperText className="!text-gray-500">{formText}</HelperText>
      )}
    </div>
  );
};

export default Input;
