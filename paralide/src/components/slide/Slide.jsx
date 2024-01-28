import PropTypes from "prop-types";

function Slide({ data }) {
    return (
        <>
            <h2>{data[0].title.text}</h2>
            <p>{data[0].description.text}</p>
        </>
    );
}

Slide.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.shape({
            text: PropTypes.string,
            alignment: PropTypes.string
        }),
        description: PropTypes.shape({
            text: PropTypes.string,
            alignment: PropTypes.string
        }),
        assets: PropTypes.arrayOf(
            PropTypes.shape({
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        source: PropTypes.string,
                        alignment: PropTypes.string
                    })
                ),
                mode: PropTypes.string
            })
        )
    })
};

export default Slide