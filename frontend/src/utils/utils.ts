export function convertTerm(term: String) {
    switch (term) {
        case 'f1': return 'Fall 1'
        case 'f2': return 'Fall 2'
        case 'f3': return 'Fall 3'
        case 'f4': return 'Fall 4'
        case 'w1': return 'Winter 1'
        case 'w2': return 'Winter 2'
        case 'w3': return 'Winter 3'
        case 'w4': return 'Winter 4'
        case 's1': return 'Summer 1'
        case 's2': return 'Summer 2'
        case 's3': return 'Summer 3'
        case 's4': return 'Summer 4'
        default: return 'error'
    }

}