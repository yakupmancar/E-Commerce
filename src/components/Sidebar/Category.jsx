import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";

const Category = ({setCategory}) => {

    const [visible, setVisible] = useState(true);

    const handleToggle = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <div onClick={handleToggle} className="cursor-pointer ml-1 flex items-center rounded-md py-3 justify-between">
                <h1 className="text-lg font-semibold tracking-wider">CATEGORY</h1>
                {visible ? (
                    <FaAngleDown />
                ) : (
                    <IoRemoveOutline />
                )}

            </div>

            {!visible && (
                <div className="flex flex-col mx-3 gap-1">
                    <FormControl>
                        <RadioGroup>
                            <FormControlLabel
                                value="All"
                                control={<Radio />}
                                label="All"
                                onChange={() => setCategory("All")}
                            />
                            <FormControlLabel
                                value="Electronics"
                                control={<Radio />}
                                label="Electronics"
                                onChange={() => setCategory("Electronics")}

                            />
                            <FormControlLabel
                                value="Furniture"
                                control={<Radio />}
                                label="Furniture"
                                onChange={() => setCategory("Furniture")}

                            />
                            <FormControlLabel
                                value="Shoes"
                                control={<Radio />}
                                label="Shoes"
                                onChange={() => setCategory("Shoes")}

                            />
                            <FormControlLabel
                                value="Miscellaneous"
                                control={<Radio />}
                                label="Miscellaneous"
                                onChange={() => setCategory("Miscellaneous")}

                            />

                            <FormControlLabel
                                value="Clothes"
                                control={<Radio />}
                                label="Clothes"
                                onChange={() => setCategory("Clothes")}

                            />


                        </RadioGroup>
                    </FormControl>
                </div>
            )}
        </div>
    )
}

export default Category