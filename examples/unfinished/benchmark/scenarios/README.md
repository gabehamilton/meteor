Parameters for simulation:

Each document is randomly placed in a collection, with a random
'bucket' field. Clients sub to 1 bucket in each collection.

- numCollections
    how many collections to spread the documents over
- numBuckets
    number of buckets per collection.

- initialDocuments: Inital documents added by the server. Probably
    not usefully combined with maxAgeSeconds

- maxAgeSeconds: How long to leave documents in the database. This,
    combined with all the various rates, determines the steady state
    database size. In seconds. falsy to disable.

Per-client action rates:
- insertsPerSecond
- updatesPerSecond
- removesPerSecond

- documentSize: bytes of randomness per document.
    // XXX make this a random distribution?
- documentNumFields: how many fields of randomness per document.

XXX also max documents? (count and remove N)
