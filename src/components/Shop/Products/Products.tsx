// import GridView from '../../CollectionGrid/GridView';
import { useState } from 'react';
import Kids from '../../CollectionGrid/Kids/Kids';
import Men from '../../CollectionGrid/Men/Men';
import Women from '../../CollectionGrid/Women/Women';
// import ListView from '../../ListView/ListView';
import Mens from '../../ListView/Men';
import Womens from '../../ListView/Women';
import Kid from '../../ListView/Kids';


const Products = () => {
    const [gridShow, setGridShow] = useState(true);
    const [menChecked, setMenChecked] = useState(true);
    const [womenChecked, setWomenChecked] = useState(true);
    const [kidChecked, setKidChecked] = useState(true);
    const handleMenChange = () => {
        setMenChecked(!menChecked);
        return;
      };
    const handleWomenChange = () => {
        setWomenChecked(!womenChecked);
        return;
      };
    const handleKidChange = () => {
        setKidChecked(!kidChecked);
        return;
      };
    //   return [menChecked,]
    return (
        <div>
            <div>
                {/* sidebar starts */}
                <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 pt-4 pb-16 item-start">
                    <div className="col-span-3 mb-4">
                        <div className='flex justify-end -mt-8 gap-3 mr-6'>
                            <button className={gridShow === true ? 'bg-indigo-500 rounded-sm text-white p-2' : 'text-indigo-500 border-indigo-500 rounded-sm border p-2'} onClick={() => setGridShow(true)}><i className="fa-thin h-7 w-7 fa-grid text-2xl"></i></button>
                            <br />
                            <button className={gridShow === false ? 'bg-indigo-500 rounded-sm text-white p-2' : 'text-indigo-500 border border-indigo-500 p-2 rounded-sm'} onClick={() => setGridShow(false)}><i className="fa-thin fa-list h-7 w-7 text-2xl"></i></button>
                        </div>
                        <br />
                        {
                            gridShow ?
                            <div className='max-w-md md:max-w-7xl mx-auto'>
                                {
                                    menChecked && <Men />
                                }
                                {
                                    womenChecked && <Women />
                                }
                                {
                                    kidChecked && <Kids />
                                }
                                
                                {
                                    kidChecked === false && menChecked === false && kidChecked===false &&
                                    <div>
                                    <Men/>
                                    <Women/>
                                    <Kids/>
                                    </div>
                                }
                            </div>      
                            // <GridView />
                            :
                            <div className='max-w-md md:max-w-7xl mx-auto'>
                            {
                                    menChecked && <Mens />
                                }
                                {
                                    womenChecked && <Womens />
                                }
                                {
                                    kidChecked && <Kid />
                                }
                                
                                {
                                    kidChecked === false && menChecked === false && kidChecked===false &&
                                    <div>
                                    <Mens/>
                                    <Womens/>
                                    <Kid/>
                                    </div>
                                }
                            </div>
                            // <ListView />
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Products;