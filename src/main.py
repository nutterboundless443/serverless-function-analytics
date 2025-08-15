import json
from flask import Flask, request

app = Flask(__name__)

@app.route('/api/performance', methods=['GET'])
def get_performance_data():
    # 模拟从无服务器函数提供商获取的数据
    data = {
        'function_name': 'sampleFunction',
        'execution_time': 150,  # in milliseconds
        'error_rate': 0.02      # 2%
    }
    return json.dumps(data)

if __name__ == '__main__':
    app.run(debug=True)