import { Image, StyleSheet, Text, View } from "react-native";

// 1. Interfaz solicitada con los tipos de datos exactos
export interface technicianCardProps {
  name: string;
  role: string;
  specialty: string;
  phone: string;
  avatarUrl: string;
  isAssigned: boolean;
  isResolved: boolean; // El booleano para verificar si está asignado o en camino
}

export function TechnicianCard({
  name,
  specialty,
  phone,
  avatarUrl,
  isResolved,
}: technicianCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
        <Text style={styles.phone}>📞 {phone}</Text>

        {/* 3. Resultado esperado: Cambiar automáticamente de color y texto */}
        <View
          style={[
            styles.statusBadge,
            isResolved ? styles.statusEnSitio : styles.statusAsignado,
          ]}
        >
          <Text style={styles.statusText}>
            {isResolved ? "🟢 En sitio / Reparando" : "🟡 Asignado"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  specialty: {
    fontSize: 14,
    color: "#64748b",
    marginVertical: 2,
  },
  phone: {
    fontSize: 13,
    color: "#475569",
    marginBottom: 6,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusAsignado: {
    backgroundColor: "#FEF3C7", // Fondo Amarillo
  },
  statusEnSitio: {
    backgroundColor: "#DCFCE7", // Fondo Verde
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
});