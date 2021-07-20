import React from 'react'
import PropTypes from 'prop-types'


// {
//     "id": 1,
//     "company": "Photosnap",
//     "logo": "./images/photosnap.svg",
//     "new": true,
//     "featured": true,
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []
//   },

const JobBoard = props => {
    const { jobs } = props;
    const { search } = props;
    return (
        <div className="mx-20">
            {jobs.filter((job) => {
                if (search === "") {
                    return job;
                } else if (job.position.toLowerCase().includes(search.toLowerCase()))
                    return job;
            }).map(job => (
                <div key={job.id} className="lg:flex shadow-md sm:max-w-full max-w-xl  bg-white  p-6 my-6 rounded-xl mx-4">
                    <div className="sm:w-32 ">
                        <img src={job.logo} alt={job.company} />
                    </div>

                    <div className="ml-4 flex flex-col justify-between">
                        <h2 className="colorText1 font-bold">
                            {job.company}
                        </h2>
                        <h3 className="font-bold text-md">{job.position}</h3>
                        <div className="flex ">
                            <p className="colorText3 text-sm">{job.postedAt}  </p>
                            <p className="colorText3 mx-2 text-sm"> {job.contract}  </p>
                            <p className="colorText3 text-sm"> {job.location}</p>
                        </div>

                    </div>

                    <div className=" ml-auto flex items-center">
                        {job.languages.map(language => (
                            <label className="colorText1 font-bold bg-custom rounded m-2 p-1">
                                {language}
                            </label>
                        ))}
                        <label className="colorText1 font-bold bg-custom rounded m-2 p-1">
                            {job.role}
                        </label>
                        <label className="colorText1 font-bold bg-custom rounded m-2 p-1">
                            {job.level}
                        </label>


                    </div>

                </div>
            ))}
        </div>
    )
}

JobBoard.propTypes = {
    jobs: PropTypes.array,
}
JobBoard.defaultProps = {
    jobs: [],
}

export default JobBoard
