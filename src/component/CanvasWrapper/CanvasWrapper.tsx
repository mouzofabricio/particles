import  * as React  from 'react';
import {useRef, useState} from 'react';
import cx from 'classnames';
import styles from './CanvasWrapper.module.scss';

interface OwnProps {
  className?: string;
}

export const CanvasWrapper: React.StatelessComponent<OwnProps> = props => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className={cx(styles.container, props.className)}>
      <canvas className={styles.canvas} ref={canvasRef}></canvas>
    </div>
  );
};
