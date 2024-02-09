import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";

const Price = ({ setPrice }) => {

    const [visible, setVisible] = useState(true);

    const handleToggle = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <div onClick={handleToggle} className="cursor-pointer ml-1 border-t-2 flex items-center py-3 justify-between">
                <h1 className="text-lg font-semibold tracking-wider">PRICE</h1>
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
                                onChange={() => setPrice([0, 200])}

                            />
                            <FormControlLabel
                                value="$0-20"
                                control={<Radio />}
                                label="$0-20"
                                onChange={() => setPrice([0, 20])}

                            />
                            <FormControlLabel
                                value="$20-40"
                                control={<Radio />}
                                label="$20-40"
                                onChange={() => setPrice([20, 40])}
                            />
                            <FormControlLabel
                                value="$40-60"
                                control={<Radio />}
                                label="$40-60"
                                onChange={() => setPrice([40, 60])}
                            />
                            <FormControlLabel
                                value="$60-80"
                                control={<Radio />}
                                label="$60-80"
                                onChange={() => setPrice([60, 80])}
                            />

                        </RadioGroup>
                    </FormControl>
                </div>
            )}
        </div>
    )
}

export default Price