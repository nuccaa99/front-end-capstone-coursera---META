import SpecialsCard from "./SpecialsCard";
import specialsData from "../Assets/specialsData";

function Specials() {
    return (
        <>
            <div className="specials">
                <div className="specials-header">
                    <h1>This Weeks Specials!</h1>
                    <button className="menu button">Online Menu</button>
                </div>
                <div className="specials-container">
                    {specialsData.specials.map((specials) => {
                        return (
                            <SpecialsCard key={specials.title} img={specials.img} title={specials.title}
                                desc={specials.desc} price={specials.price} />
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Specials;
