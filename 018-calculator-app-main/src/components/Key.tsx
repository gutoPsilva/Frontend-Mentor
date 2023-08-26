interface ButtonProps {
  text: string;
}

export const Key = (props: ButtonProps) => {
  return <button className="rounded-lg bg-key-light-orange text-3xl">{props.text}</button>;
};
