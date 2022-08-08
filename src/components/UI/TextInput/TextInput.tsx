import React from 'react';

// Enums
import { TextInputVariants } from 'utils/enums/textInput';

// Styles
import {
  TextInputVariant,
  StyledInputContainer,
  StyledInputMainContainer,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  StyledLeftIconContainer,
  StyledRightIconContainer,
  StyledErrorLabel,
  StyledErrorIcon,
  StyledValidIcon,
  StyledEyesIconVisible,
  StyledEyesIconNotVisible,
  StyledCharCounterSpan,
  StyledCounterCharacterContainer,
} from './style';

interface TextInputProps {
  id?: string;
  className?: string;
  variant?: TextInputVariant;
  name?: string;
  type?: 'text' | 'password';
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
  valid?: boolean,
  maxLength?: number;
  multiline?: boolean;
  value?: string;
  autoComplete?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClear?: () => void;
}

const TextInput = ({
  id,
  className,
  variant = TextInputVariants.NORMAL,
  name,
  disabled,
  placeholder,
  label,
  error,
  errorMessage,
  valid,
  maxLength,
  type,
  leftIcon,
  rightIcon,
  multiline,
  value,
  autoComplete = 'new-password',
  onChange,
  onFocus,
  onBlur,
  onClear,
}: TextInputProps, _ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>) => {
  // Refs
  const innerRef = React.useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // States
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [charCounter, setCharCounter] = React.useState<number>(0);

  // Handlers
  const handleRegisterAndStoreRef = React.useCallback((ref: any) => {
    if (_ref) {
      (_ref as Function)(ref);
    }
    innerRef.current = ref;
  }, [_ref]);

  const handleTogglePasswordVisible = React.useCallback(() => {
    setPasswordVisible(s => !s);
  }, []);

  const handleOnChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputLength: number = e.target.value.length;
    if (multiline) {
      setCharCounter(inputLength);
    }
    if (onChange) {
      if (maxLength && inputLength >= maxLength) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        onChange(e);
      }
      if (!maxLength) {
        onChange(e);
      }
    }
  }, [onChange, multiline, maxLength]);

  const handleOnClickRightIcon = React.useCallback(() => {
    if (error) {
      if (onClear) {
        onClear();
      }
      if (innerRef.current) {
        innerRef.current.value = '';
        innerRef.current.focus();
      }
    } else if (type === 'password') {
      handleTogglePasswordVisible();
    } else if (variant === TextInputVariants.SEARCH && onClear) {
      onClear();
    }
  }, [error, type, variant, onClear, handleTogglePasswordVisible]);

  return (
    <StyledInputMainContainer
      className={className}
    >
      {
        label && (
          <StyledLabel
            $variant={variant}
            $error={error}
            $disabled={disabled}
          >
            {label}
          </StyledLabel>
        )
      }

      <StyledInputContainer>
        {/* Left Icon */}
        {
          leftIcon && (
            <StyledLeftIconContainer
              $disabled={disabled}
              $isSearch={variant === TextInputVariants.SEARCH}
            >
              {leftIcon}
            </StyledLeftIconContainer>
          )
        }

        {/* Real Input */}
        { multiline
          ? (
            <StyledTextArea
              ref={handleRegisterAndStoreRef}
              id={id}
              name={name}
              value={value}
              placeholder={placeholder}
              disabled={disabled}
              $variant={variant}
              $error={error}
              $valid={valid}
              onChange={handleOnChange}
              onFocus={onFocus}
              onBlur={onBlur}
              maxLength={maxLength}
            />
          )
          : (
            <StyledInput
              ref={handleRegisterAndStoreRef}
              id={id}
              value={value}
              // eslint-disable-next-line no-nested-ternary
              type={type === 'password' ? passwordVisible ? 'text' : type : type}
              name={name}
              placeholder={placeholder}
              disabled={disabled}
              autoComplete={autoComplete}
              data-lpignore="true" // To avoid lastpass
              maxLength={maxLength}
              $variant={variant}
              $error={error}
              $valid={valid}
              $withLeftIcon={!!leftIcon}
              $withRightIcon={!!rightIcon || error || valid || type === 'password'}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          )}

        {/* Right Icon */}
        <StyledRightIconContainer
          className="no-tap-light right-icon"
          $error={error}
          $valid={valid}
          $isPassword={type === 'password'}
          $withRightIcon={!!rightIcon}
          $isSearch={variant === TextInputVariants.SEARCH}
          onClick={handleOnClickRightIcon}
        >
          {
            type === 'password' ? (
              <>
                {
                  passwordVisible ? (
                    <StyledEyesIconNotVisible />
                  ) : (
                    <StyledEyesIconVisible />
                  )
                }
              </>
            ) : (
              <>
                {
                  error ? (
                    <StyledErrorIcon />
                  ) : (
                    <>
                      {
                        valid ? (
                          <StyledValidIcon />
                        ) : (
                          <>
                            {rightIcon}
                          </>
                        )
                      }
                    </>
                  )
                }
              </>
            )
          }
        </StyledRightIconContainer>
      </StyledInputContainer>
      {
        (error && errorMessage) && (
          <StyledErrorLabel
            variant="INTER-12-16-400"
          >
            {errorMessage}
          </StyledErrorLabel>
        )
      }
      {
        multiline
        && maxLength
        && (
          <StyledCounterCharacterContainer>
            <StyledCharCounterSpan>{charCounter}/{maxLength}</StyledCharCounterSpan>
          </StyledCounterCharacterContainer>
        )
      }

    </StyledInputMainContainer>
  );
};

const ForwardedRefTextInput = React.forwardRef(TextInput);

export default React.memo(ForwardedRefTextInput);
