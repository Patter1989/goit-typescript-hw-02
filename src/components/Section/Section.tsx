import { FC } from "react";
import css from "./Section.module.css";
interface SectionProps {
	children: React.ReactNode;
}
const Section: FC<SectionProps> = ({ children }) => {
	return <section className={css.section}>{children}</section>;
};

export default Section;
