import { useState } from 'react';
import './App.css';
import studentsdata from './utils/students'
import arabicMatch from './utils/arabicMatch'
import logo from './logo.jpg'


const App = () => {
  const [nameInput, setNameInput] = useState('')
  const [person, setPerson] = useState(null)
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [showInfo, setShowInfo] = useState(0)


  const handlePersonClick = (student) => {
    setPerson(student)

  }

  const handleNameChange = (name) => {
    setNameInput(name)
    setPerson(null)
    setShowInfo(0)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDay(e.target.day.value)
    setMonth(e.target.month.value)
    setYear(e.target.year.value)

    if (person.BirthDate === `${day}/${month}/${year}`) {
      setShowInfo(1)
    } else {
      setShowInfo(2)
    }
  };

  const renderNames = () => {
    let names = studentsdata.filter(std => arabicMatch(nameInput.trim(), std.Name.trim())).slice(0, 10)
    if (names.length === 0) {
      return <div>
        <span className='d-block text-danger'>لا يوجد طالب بهذا الاسم</span>
        <span>ادخل اي مقطع من اسم الطالب</span>

      </div>
    }

    return nameInput.trim() ? names
      .map(std => <div className='d-flex mx-4 justify-content-between border px-2 py-1 my-1' onClick={() => handlePersonClick(std)} key={std.Number}>
        <h6>{std.Name}</h6>
        {std.Class}
      </div>) : <div>ادخل اسم الطالب</div>
  }

  const renderPerson = person => {
    return (
      <div className='border mx-4'>
        <h4 className='text-primary mt-2'>{person.Name}</h4>
        <p>{person.Class} - {person.Section}</p>
        {
          showInfo === 1 ?
            null :
            <form className='form-group text-end border mx-4 p-2 shadow' onSubmit={handleSubmit}>
              <h5>
                ادخل تاريخ الميلاد
              </h5>
              <select className='form-group form-control form-select-lg mb-2' name="day" onChange={(e) => { setDay(e.target.value); setShowInfo(0) }}>
                <option value="00">اليوم</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>

              <select className='form-group form-control form-select-lg mb-2' name="month" onChange={(e) => { setMonth(e.target.value); setShowInfo(0) }}>
                <option value="00">الشهر</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>

              <select className='form-group form-control form-select-lg mb-2' name="year" onChange={(e) => { setYear(e.target.value); setShowInfo(0) }}>
                <option value="0000">السنة</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
              </select>

              <div className="d-grid gap-2 ">
                <input className="btn btn-primary text-bold btn-lg" type="submit" value="بحث" />
              </div>

            </form>
        }

        {
          renderInfo(person)
        }
      </div>

    )
  }

  const renderInfo = (person) => {
    switch (showInfo) {
      case 1:
        return <div className='card shadow m-3'>
          <div className='card-body text-end mb-3'>
            <p className='text-success'>استخدم هذه البيانات للدخول الى تطبيق التيمز</p>
            <h5 className="card-title">البريد الالكتروني</h5>
            <h6 style={{ direction: 'ltr' }} className="card-text shadow-sm">{`${person.Number}@students.unrwa-edu.org`}</h6>
            <h5 className="card-title">كلمة المرور</h5>
            <h6 className="card-text shadow-sm">Unrwa123</h6>
            <p className='mt-4'>
              لمزيد من المعلومات حول استخدام مايكروسوفت تيمز
            </p>
              <p>
                <a href="https://keeplearning.unrwa.org/team">اضغط هنا</a>

              </p>

          </div>
        </div>
      case 2:
        return <div className='text-danger'> خطأ تأكد من تاريخ الميلاد</div>
      default:
        return <div>  ادخل تاريخ الميلاد ثم أنقر على بحث</div>

    }
  }



  return (
    <div className="App">
      <div className='mt-5 mb-2 rounded'>
        <img src={logo} alt="" />
        <h3 className='mx-3 '>مدرسة ذكور مخيم عمان الاعدادية الثانية</h3>
        <p className='px-5'>الحصول على البريد الالكتروني وكلمة المرور للدخول الى تطبيق مايكروسوفت تيمز</p>
      </div>

      <div className='px-4 '>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">اسم الطالب</span>
          <input onChange={e => handleNameChange(e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </input>
        </div>
      </div>

      {
        person ? renderPerson(person) : renderNames()
      }
      <div className="copyright">
        by <span>alghoul and abu-juiaed</span>
        </div>
    </div>
  );
}

export default App;
