﻿using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections.Generic;
using System.Text;

namespace EkoFunkcje
{
    class InterventionEntity : TableEntity
    {
        public InterventionEntity(string email)
        {
            this.PartitionKey = Guid.NewGuid().ToString();
            this.RowKey = Email;
        }

        public InterventionEntity() { }
        
        public DateTime CreationDate { get; set; }

        public string FullName { get; set; }

        public string Description { get; set; }

        public int PhoneNumber { get; set; }

        public string Email { get; set; }

        public string Status { get; set; }

        public string Adres { get; set; }
    }
}
