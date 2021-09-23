import cn from 'classnames';
import { PProps } from './P.props';
import styles from './P.module.css';

export const P = ({ size, children, className, ...props
}: PProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.l]: size == 'l',
            })}
            {...props}
        >
            {children}
        </p>
    );
};

// switch (size) {
//     case 's':
//         return <p className={styles.s}>{children}</p>;
//     case 'm':
//         return <p className={styles.m}>{children}</p>;
//     case 'l':
//         return <p className={styles.l}>{children}</p>;
//     default:
//         return <></>;
// }