import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
	text: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ text }) => {
	return <div className={styles.container}>{text}</div>;
};

export default BaseTemplate;
