import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
    const [message, setMessage] = useState('');
    const { number } = useParams();


    return (
        <div>
            <p>This is the about page.</p>
            <Link to="/">Go to the Home Page!</Link>
        </div>
    );
};

export default AboutPage;