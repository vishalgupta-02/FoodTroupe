import { createContext } from "react";
// import PropTypes from 'prop-types'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    
    
    const contextValue = {

    }
    return(
        <StoreContextProvider value={contextValue}>
            {props.children}
        </StoreContextProvider>
    )
}

// StoreContextProvider.propTypes = {
//     children: PropTypes.object,
// }

export default StoreContextProvider