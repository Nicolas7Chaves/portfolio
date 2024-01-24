import "./Education.scss"
import '../../Pages/MainPage/MainPage.scss';

function Education () {

    return (
        <section className="education">
            <h2 className="section__title section__title--education">Education</h2>
            <div className="education__layout">
                <div className="education__item">1
                    <div className="education__logo">logo</div>
                    <div className="education__name"> name</div>
                </div>
                <div className="education__item">2
                    <div className="education__logo">logo</div>
                    <div className="education__name"> name</div>
                </div>
                <div className="education__item">3
                    <div className="education__logo">logo</div>
                    <div className="education__name"> name</div>
                </div>
            </div>
        </section>
    )
}

export default Education;