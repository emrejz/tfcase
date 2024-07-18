import "./index.scss";
export default function Index({ children, className }) {
  return <div className={`box-container ${className}`}>{children}</div>;
}
