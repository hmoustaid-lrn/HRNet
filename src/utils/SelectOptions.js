function SelectOptions({ options, title }) {
    const elements = options.map((option) => (
        <option key={option.abbreviation} value={option.abbreviation} name={title}>
            {option.name}
        </option>
    ))
    if(title==="state" || title==="departments"){
        const defaultOption = (
            <option key={title+'N/A'} value="N/A" name={title}>
              N/A
            </option>
          );
          
          elements.unshift(defaultOption);          
    }
    return elements
}

export default SelectOptions