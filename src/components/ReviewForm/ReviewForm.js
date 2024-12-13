import React, {useEffect} from 'react'; 
const ReviewForm = () => {

  useEffect(() => {

    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));

    console.log(storedDoctorData);
  }, [])


  return (
    <div>ReviewForm</div>
  )
}

export default ReviewForm