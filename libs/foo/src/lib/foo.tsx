import styles from './foo.module.css';
import { isOk } from './isOk';

/* eslint-disable-next-line */
export interface FooProps {}

export function Foo(props: FooProps) {
  const _isOk = isOk();
  return (
    <div className={styles['container']}>
      {_isOk ? <h1>Welcome to Foo!</h1> : <h1>Not Found...</h1>}
    </div>
  );
}

export default Foo;
