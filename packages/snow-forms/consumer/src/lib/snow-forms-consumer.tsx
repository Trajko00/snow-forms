/* eslint-disable-next-line */
export interface SnowFormsConsumerProps {}
import { BaseComponent } from '@snow-forms/producer';

export function SnowFormsConsumer(props: SnowFormsConsumerProps) {
  return (
    <div>
      <h1>Welcome to SnowFormsConsumer!</h1>
      <BaseComponent name="Pera" />
    </div>
  );
}

export default SnowFormsConsumer;
