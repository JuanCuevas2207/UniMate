using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniMate.Classes
{
    public class Residence
    {
        public int Id { get; set; }
        [Display(Name = "Dirección")]
        public string address { get; set; }
        [Display(Name = "Localidad")]
        public string locality { get; set; }
        [Display(Name = "Número de habitaciones")]
        public int roomsNumber { get; set; }
        [Display(Name = "Precio")]
        public float cost { get; set; }
        [Display(Name = "Disponibilidad")]
        public bool availability { get; set; }
        [Display(Name = "Fecha de disponibilidad")]
        public DateTime availabiltyDate { get; set; }
        [Display(Name = "Amoblado")]
        public bool furnished { get; set; }
        [Display(Name = "Ambiente de la locación")]
        public string mood { get; set; }
        [Display(Name = "Calificación")]
        public int rating { get; set; }
        [Display(Name = "Comentarios")]
        public List<string> comments { get; set; }
    }
}