import clsx from 'clsx';

interface SocialButtonProps extends React.ComponentProps<'a'> {
  image: string;
  text: string;
  variant?: 'normal' | 'blend';
}

export default function SocialButton({
  className,
  image,
  text,
  variant = 'normal',
  ...restProps
}: SocialButtonProps) {
  return (
    <a
      {...restProps}
      className={clsx(
        className,
        'bg-[#D9D9D9] transition',
        'max-[451px]:basis-full',
        'flex items-center',
        'gap-x-3 px-3 py-2 sm:gap-x-5',
        'text-4xl sm:text-5xl lg:multi-[text-[57px];py-1]',
        'hover:multi-[`transition-all;bg-primary;text-white;[--blend:normal];[&_img]:[mix-blend-mode:var(--blend,normal)]`]',
        {
          '[--blend:difference]': variant === 'blend',
        }
      )}
    >
      <img
        src={image}
        alt=''
        className={clsx(
          '[--h:40px]',
          'sm:[--h:55px]',
          'lg:multi-[[--h:75px]]',
          'h-[--h] object-contain',
          '[mix-blend-mode:var(--blend)]'
        )}
      />
      <span>{text}</span>
    </a>
  );
}
