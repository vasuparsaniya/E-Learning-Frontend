type Props = {
  onClick: () => void;
  isDisable?: boolean;
  text?: string;
  className?: string;
  wrapperClass?: string;
};

const Button = (props: Props) => {
  const {
    isDisable = false,
    onClick,
    text = '',
    className = '',
    wrapperClass = 'w-[250px]',
  } = props;

  return (
    <div
      className={`flex items-center ${wrapperClass.length ? wrapperClass : ''} ${isDisable && 'button-disabled'}`}
      onClick={onClick}
    >
      <p
        className={`button button-primary ${className.length ? className : ''}`}
      >
        {text}
      </p>
    </div>
  );
};

export default Button;
