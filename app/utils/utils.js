const utils = {
    
    reduceText: (str, maxSize = 90) => {
        if(str.length <= maxSize)
            return str

        return str.slice(0,maxSize) + '...'    
    }
}