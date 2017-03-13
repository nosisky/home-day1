describe("OOP test Cases ", function() {
  describe("check for output when getName is called", function() {
    it("should return Gbade Bola", function() {
    	let Gbade = new Person("Gbade", "Bola", 12);
      expect(Gbade.getName()).toEqual('Gbade Bola');
    });
     it("should output Rasaq Bola", function() {
     	let Rasaq = new Person("Rasaq", "Bola", 12);
      expect(Rasaq.getName()).toEqual('Rasaq Bola');
     });
    it("Check Bola is instanceof Person", function() {
     	let Bola = new Person("Rasaq", "Bola", 12);
      expect(Bola instanceof Person).toBe(true);
     });
    it("Check Daniel is instanceof Person", function() {
     	let Daniel = new Person("Rasaq", "Bola", 12);
      expect(Daniel instanceof Person).toBe(true);
     });
     it("should output 20 as Fred Age after the setAge function is called", function() {
     	let Fred = new Developer("Fred", "Olaniyi", 12, "Intermediate", 2000);
     	Fred.setAge(23)
      expect(Fred.getAge()).toEqual(23);
     });

    it("check if Daniel is an instanceof developer class", function() {
     	let Daniel = new Developer("Rasaq", "Bola", 12, "Intermediate", 2000);
      expect(Daniel instanceof Developer).toBe(true);
     }); 
    it("Should get Chika ", function() {
     	let Chika = new Developer("Chika", "Bola", 28, "Intermediate", 2000);
      expect(Chika.getData()).toEqual('Hi! I\'m Chika Bola and I\'m 28 years old.');
     });

    it("check if Daniel is an instanceof developer class", function() {
     	let Olatosin = new Developer("Olatosin", "Bola", 12, "Intermediate", 2000);
      expect(Olatosin instanceof Developer).toBe(true);
     });

     it("should output Daniel Manson", function() {
     	let Daniel = new Developer("Daniel", "Manson", 12, "Intermediate", 2000);
      expect(Daniel.getName()).toEqual("Daniel Manson");
     });

     it("should output 12 as Daniel Age", function() {
     	let Daniel = new Developer("Daniel", "Manson", 12, "Intermediate", 2000);
      expect(Daniel.getAge()).toEqual(12);
     });
     it("should output 23 as Bimbo Age after the setAge function is called", function() {
     	let Bimbo = new Developer("Bimbo", "Osin", 12, "Intermediate", 2000);
     	Bimbo.setAge(23)
      expect(Bimbo.getAge()).toEqual(23);
     });
  });

  
});
