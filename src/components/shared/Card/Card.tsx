import classes from "./Card.module.scss";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`${classes.card_wrapper} ${className ? className : ""}`}>
      {children}
    </div>
  );
}
