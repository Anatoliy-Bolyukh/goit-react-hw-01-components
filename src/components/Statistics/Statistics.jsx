import PropTypes from "prop-types";
import css from '../Statistics/statistics.module.css'

const Statistics = ({ stats }) => (
    <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css.list}>
            {stats.map(({ id, label, percentage }) => (
                <li className={css.item} key={id}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}</span>
                </li>
            ))}
        </ul>
    </section>
);

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}

export default Statistics