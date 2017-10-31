---
topic: "Sockets"
desc: "An abstraction used in networking"
---

The term *socket* is overloaded, in the sense that there are multiple meanings of the word.

It can mean:

* In TCP/IP based networking, a pair consisting of an IP address and a port number (sometimes written `<IP-address,port>`
`<128.111.27.13, 80>`.

* An abstraction that originated in the Unix Operating System (and was widely copied into other OS designs) that 
   is an endpoint for network communication; i.e. the data structure through which an application initiates connections 
   and/or responds to connection requests, and sends and receives data.
   
Often these two "sockets" are in a one-to-one relationship, but not always.    There are times when one <IP-address,port> pair may correspond
to multiple "sockets" in the OS abstraction sense (this happens more often with server side sockets than client side sockets.)

In the Java programming language there is a class [`Socket`](https://docs.oracle.com/javase/8/docs/api/java/net/Socket.html) 
that depending on the context, may correspond to either of these meanings, but it is close to the second sense of the word
socket.

