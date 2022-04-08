import { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => {
  return (
    <div className="input-form">
      <div>
        <div className="label-contain">
          <span className="label">{props.label}</span>
        </div>
        <div>
          <input
            className={`${
              props.errors && props.errors[props.name] ? 'form-controls-error' : ''
            }`}
            type="text"
            id={props.name}
            name={props.name}
            placeholder={props?.placeholder}
            onBlur={props?.onBlur}
            onChange={props?.onChange}
            ref={ref}
            {...props}
          />
          {props.errors && props?.errors[props.name] && (
            <span className="text-error">{props?.errors[props.name].message}</span>
          )}
        </div>
      </div>
    </div>
  );
});
