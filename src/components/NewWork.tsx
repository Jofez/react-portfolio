import React, { FormEvent,  useState } from 'react'
import { ExperienceProps } from './Types'
import { formatDate } from '../utils/dateUtils'
import { v4 as uuid } from "uuid";

export default function NewWork() {

  // const [company, setCompany] = useState('')
  // const [title, setTitle] = useState('')
  // const [startDate, setStartDate] = useState('')
  // const [endDate, setEndDate] = useState('')
  // const [location, setLocation] = useState('')
  // const [description, setDescription] = useState('')
  // const [languages, setLanguages] = useState('')
  const [newExp, setNewExp] = useState<ExperienceProps[]>([])
  const [formData, setFormData] = useState({
    id: 0,
    company: '',
    logo: '',
    title: '',
    fromDate: new Date(''),
    toDate: new Date(''),
    location: '',
    isOpen: false,
    details: { 
        description: '',
        languages: '' 
    } 
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const generateNumericId = (): number => {
      const numericString = uuid().replace(/\D/g, '').slice(0, 12); // Ta bort icke-numeriska tecken och begränsa längden
      return parseInt(numericString, 10); 
    };
    
    // Användning
    const id = generateNumericId();

    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      id: id,
      [name]: value,
    }));
  };

  // const newExp: ExperienceProps[] = []
  //   {
  //     id: 3,
  //     company: company,
  //     logo: "",
  //     title: title,
  //     fromDate: new Date("2022-09"),
  //     toDate: new Date("2024-11"),
  //     location: location,
  //     isOpen: false,
  //     details: { 
  //         description: description,
  //         languages: languages 
  //     } 
  // },
  // ]

    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);



    const handleSubmit = (e: FormEvent) => {
      console.log(formData)
      setNewExp((prev) => [...prev, formData]);

      
        e.preventDefault()
        
        // console.log(newExp.map(e => formatDate(e.fromDate)))
        // console.log(newExp.map(e => e))

        setFormData({
          id: 0,
          company: '',
          logo: '',
          title: '',
          fromDate: new Date(''),
          toDate: new Date(''),
          location: '',
          isOpen: false,
          details: { 
              description: '',
              languages: '' 
          } 
        });
    }

  return (
    <div >
      <h1>Lägg till ny erfarenhet</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-1 text-left'>

          <label htmlFor="company">Företag:</label>
          <input className='text-black' required id="company" name="company" type='text'
            value={formData.company}
            // onChange={(e) => setCompany(e.target.value)}
            onChange={handleChange}
            />

          <label htmlFor='title'>Titel</label>
          <input className='text-black' required id="title" name="title" type='text' 
          value={formData.title} 
          // onChange={(e) => setTitle(e.target.value)} 
          onChange={handleChange}
          />

          <div className='flex flex-row gap-2'>
            <div className='flex flex-col'>

              <label htmlFor='fromDate'>Start</label>
              <input className='text-black'
                required id="fromDate" name="fromDate" type='month' 
                // value={startDate} 
                // onChange={(e) => setStartDate(e.target.value)} 
                onChange={handleChange}
                />
            </div>

            <div  className='flex flex-col'>
              <label htmlFor='toDate'>Slut</label>
              <input className='text-black'
                id="toDate" name="toDate" type='month' 
                // value={formData.toDate} 
                // onChange={(e) => setEndDate(e.target.value)} 
                onChange={handleChange}
                />
            </div>
          </div>

          <label htmlFor='location'>Plats</label>
          <input className='text-black' required id="location" name="location" type='text' 
            value={formData.location} 
            // onChange={(e) => setLocation(e.target.value)} 
            onChange={handleChange}
            /> 

          <label htmlFor='description'>Beskrivning</label>
          <input className='text-black' id="description" name="description" type='textarea' 
            // value={formData.description} 
            // onChange={(e) => setDescription(e.target.value)} 
            />

          <label htmlFor='languages'>Språk</label>
          <input className='text-black' id="languages" name="languages" type='textarea'
            // value={languages} 
            // onChange={(e) => setLanguages(e.target.value)} 
            />
          
          <br></br>
          <button className='border-white border-2 rounded-sm hover:bg-hover-purple transition duration-500' type='submit'>Lägg till</button>
      </form>

      <h2>Erfarenheter:</h2>
      <ul>
        {newExp.map((exp, index) => (
          <li key={index}>
            {exp.company} - {exp.title} 
            {/* ({formatDate(exp.fromDate)} till {formatDate(exp.toDate)}) */}
          </li>
        ))}
      </ul>
  

    </div>
  )
}
