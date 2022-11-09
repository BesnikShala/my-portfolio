import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} />
                <div className="proj-text">
                    <h5>{title}</h5>
                    <span>{description}</span>
                    <br></br>
                    <div className='proj-link'>
                        <a href={siteUrl} target="_blank" >Click here to view the site</a>
                    </div>
                    
                </div>
            </div>
        </Col>
    )
}