import React from 'react';
import { useFormContext } from 'react-hook-form';

type FieldErrorMessageProps = {
  field: string;
};

const Error = ({ field }: FieldErrorMessageProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className="error-container position-absolute">
      {errors?.[field]?.type && (
        <p className="text-danger position-relative">
          {/* <i className="fas fa-exclamation-triangle" /> {errors[field].message} */}
        </p>
      )}
    </div>
  );
};

export default Error;