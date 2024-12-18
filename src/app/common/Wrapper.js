

export default function Wrapper(props) {
    const colClassName = props?.colClassName || false;
    const className = props?.className || '';
    return <div className={`${className} wrapper ${colClassName} `}>{props.children}</div>
}