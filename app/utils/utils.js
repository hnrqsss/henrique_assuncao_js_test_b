const utils = {
    
    reduceText: (str, maxSize = 40) => {
        if(str.length <= maxSize)
            return str

        return str.slice(0,maxSize) + '...'    
    }
}