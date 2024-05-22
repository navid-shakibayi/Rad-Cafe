import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = ({

}) => {

    const [categoriesData, setCategoriesData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1337/api/categories?populate=*')
            .then(res => res.json())
            .then(data => {
                setCategoriesData(data.data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    const activeStyle = "border-t border-custom-color2 rounded-lg"
    const notActiveStyle = "snap-start"

    return <>
        <section className="flex overflow-auto gap-6 mt-6 snap-x">
            {
                categoriesData && categoriesData.map(item => {
                    return <NavLink
                        key={item.id}
                        to={`${item.id}`}
                        className={(navData) => navData.isActive ? `${activeStyle}` : `${notActiveStyle}`}
                    >
                        <div className="w-28 aspect-square flex flex-col items-center justify-between bg-custom-color11 rounded-t-lg">
                            <img
                                src={`http://localhost:1337${item.attributes.icon.data.attributes.url}`}
                                alt={item.attributes.title}
                                className="w-12 aspect-square mt-3"
                            />
                            <p className="text-sm text-center py-2 bg-custom-color2 w-full rounded-b-lg font-semibold">{item.attributes.title}</p>
                        </div>
                    </NavLink>
                })
            }
        </section>
    </>
}

export default Categories