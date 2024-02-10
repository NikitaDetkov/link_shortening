import classes from './UserButton.module.css';

const UserButton = ({children, addClass, ...props}) => {
    const classBtn = classes.btn + ' ' + classes?.[addClass] || '';

    return <button className={classBtn} {...props}>
        {children}
    </button>
}

export default UserButton;