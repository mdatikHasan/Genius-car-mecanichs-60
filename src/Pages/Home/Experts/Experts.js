import React from 'react';
import mechanic1 from '../../../images/experts/expert-1.jpg';
import mechanic2 from '../../../images/experts/expert-2.jpg';
import mechanic3 from '../../../images/experts/expert-3.jpg';
import mechanic4 from '../../../images/experts/expert-4.jpg';
import mechanic5 from '../../../images/experts/expert-5.jpg';
import mechanic6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert'
    },
    {
        img: mechanic3,
        name: 'Zakanix Smith',
        expertize: '-Coloring Expert'
    },
    {
        img: mechanic4,
        name: 'learbarz',
        expertize: '-Tyre Expert'
    },
    {
        img: mechanic5,
        name: 'quiders ender',
        expertize: '-Light expert'
    },
    {
        img: mechanic6,
        name: 'Shiblo Smith',
        expertize: '-Dalal Expert'
    },
]
const Experts = () => {
    return (
        <div className='container'>
            <h1 className='text-primary'>Our Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert expert={expert} key={expert.name}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;