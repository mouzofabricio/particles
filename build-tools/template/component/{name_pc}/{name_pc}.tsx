import * as React from "react";
import cx from 'classnames';
import styles from "./{{name_pc}}.module.scss";

interface OwnProps {
  className?:string;
}

{{#if stateless}}
export const {{name_pc}}:React.StatelessComponent<OwnProps> =
  (props) =>
    <div className={cx(styles.container, props.className)}>Component {{name_pc}} created!</div>;
{{/if}}
{{#unless stateless}}
interface State {}

export class {{name_pc}} extends React.Component<OwnProps, State> {
  constructor(props:OwnProps) {
    super(props);
  }

  public render() {
    return <div className={cx(styles.container, this.props.className)}>Component {{name_pc}} created!</div>;
  }
}
{{/unless}}
