import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { searchByCountry } from '../config'
import { useState, useEffect } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Button } from '../components/Button';
import { Info } from '../components/Info';

export const Details = () => {
  const [country, setCountry] = useState(null)
  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(searchByCountry(`${name}`)).then(({ data }) => {
      setCountry(data[0])
    })
  }, [name])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && (
        <Info push={navigate} {...country} />
      )}
    </div>
  )
}
