import Link from 'next/link';
import classes from './Button.module.css';

interface IProps {
  link?: string
  buttonType?: 'button' | 'submit' | "reset"
  onButtonClick?: () => void
}

const Button: React.FC<IProps> = ({ link, children, buttonType, onButtonClick }) => {
   return (
     <button
       type={ buttonType }
       className={ buttonType === "submit" ? classes.Button : `${classes.Button} ${classes.resetButton}` }
       onClick={ onButtonClick }
     >
       {
         link ? (
          <Link href={ `/${link}` }>
            <a>{ children }</a>         
          </Link>
         ) : (
           <a>{ children }</a>
         )
       }
       
    </button>
  )
};
export default Button;