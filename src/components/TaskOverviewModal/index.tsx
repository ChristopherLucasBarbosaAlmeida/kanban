import { Modal, SelectField, Subtask } from "..";
import styles from "./styles.module.scss";

export function TaskOverviewModal() {
  return (
    <Modal>
      <strong>
        Research pricing points of valours competitors and trial different
        business models
      </strong>
      <p>
        We know we re planning to build for version one. Now we need to finalise
        the first pricing model well use. Keep iterating the subtasks until we
        have a coherente proposition
      </p>
      <div className={styles.container__subtasks}>
        <span>Subtasks (2 of 3)</span>
        <Subtask>Research competitor pricing adn business models</Subtask>
        <Subtask>Outline a business model that works for our solution</Subtask>
        <Subtask>
          Talk to pontential customers about our proposet solution and ask for
          fair price expectancy
        </Subtask>
      </div>
      <SelectField label="Status" />
    </Modal>
  );
}
