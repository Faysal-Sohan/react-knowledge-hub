import PropTypes from 'prop-types';
const Blog = ({blog}) => {

    const {cover, title} = blog;

    return (
        <div>
            <img src={cover} alt={`Cover Photo of Blog ${title}`} />
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;