document.getElementById("checkout-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const nome = document.getElementById("nome").value;
    const empresa = document.getElementById("empresa").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    // Dados adicionais do serviço selecionado
    const servicoNome = "Consultoria em Segurança Cibernética";
    const preco = "R$ 499,00";

    // Monta o payload para a requisição
    const payload = {
        nome,
        empresa,
        telefone,
        email,
        servico: servicoNome,
        preco,
    };

    try {
        // Faz a requisição POST ao backend
        const response = await fetch("http://127.0.0.1:5000/api/servicos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            alert("Solicitação enviada com sucesso!");
            console.log(data);
        } else {
            const error = await response.json();
            alert(`Erro: ${error.error}`);
        }
    } catch (error) {
        console.error("Erro ao enviar solicitação:", error);
        alert("Erro ao conectar ao servidor.");
    }
});
